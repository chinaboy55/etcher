/**
 * Post-install script: patches etcher-sdk to allow RAID drives.
 * Removes the busType !== 'RAID' filter in BlockDeviceAdapter.
 */
const fs = require('fs');
const path = require('path');

const file = path.join(
	__dirname,
	'node_modules',
	'etcher-sdk',
	'build',
	'scanner',
	'adapters',
	'block-device.js',
);

try {
	let content = fs.readFileSync(file, 'utf8');

	if (content.includes('// patch-etcher-sdk: RAID check removed')) {
		console.log('[patch-etcher-sdk] Already patched, skipping.');
		process.exit(0);
	}

	const before = content;
	content = content.replace(
		"drive.busType !== 'RAID' &&",
		[
			'// patch-etcher-sdk: RAID check removed',
			'true &&',
		].join('\n\t\t\t'),
	);

	if (before === content) {
		console.error(
			'[patch-etcher-sdk] ERROR: Could not find RAID check pattern in block-device.js',
		);
		process.exit(1);
	}

	fs.writeFileSync(file, content, 'utf8');
	console.log('[patch-etcher-sdk] Successfully patched: RAID drives are now allowed.');
} catch (err) {
	console.error('[patch-etcher-sdk] ERROR:', err.message);
	process.exit(1);
}
