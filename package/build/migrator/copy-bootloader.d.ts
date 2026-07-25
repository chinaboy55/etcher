/**
 * Copies bootloader files from image partition to a local path. Also transforms
 * grub configuration files to provide a fallback boot to Windows if initial
 * boot to balenaOS fails.
 * @param {string} imagePath - Pathname for source balenaOS image file
 * @param {number} sourcePartition - 1-based index of partition within image containing bootloader
 * @param {string} sourceFolderPath - Pathname for source folder containing bootloader
 * @param {string} targetFolderPath - Pathname for target folder for bootloader
 * @returns
 */
export declare const copyBootloaderFromImage: (imagePath: string, sourcePartition: number, sourceFolderPath: string, targetFolderPath: string) => Promise<void>;
