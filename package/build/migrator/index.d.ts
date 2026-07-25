import { ConnectionProfile, WifiAuthType } from './helpers';
export { ConnectionProfile, WifiAuthType };
/** Options for migrate(): */
export interface MigrateOptions {
    omitTasks: string;
    connectionProfiles: ConnectionProfile[];
}
/** Describes the result of running migrate() function. */
export declare const enum MigrateResult {
    OK = 0,
    ERROR = 1
}
/**
 * @summary Sets up a UEFI based computer running Windows to switch to balenaOS, and then reboots to execute the switch.
 * !!! WARNING !!! Running this function will OVERWRITE AND DESTROY the operating system running on this computer.
 *
 * Migration copies a balenaOS boot partition and rootA partition from an image file to
 * the computer's storage, as well as a bootloader to trigger booting into the boot
 * partition. The migration is executed as a sequence of tasks as shown below, and begins
 * with an implicit "analyze" task that always is performed.
 *
 * After a reboot, the computer may boot to the Windows system paritition, or it may
 * boot to the newly copied flasher boot parition. So we must allow for failover in either case.
 *
 * The migration outputs useful status messages to the console. Migration catches
 * errors thrown within, outputs them to the console, and returns MigrateResult.ERROR.
 *
 * The migration may be re-run on a computer to support development or a failure in the
 * original run. A task may be omitted by listing it in the options.omitTasks parameter.
 *
 * * shrink -- shrink existing Windows partition as needed to accommodate the new partitions
 * * copy -- create/copy partitions from image, and add failover to Windows for boot partition
 * * config -- write host configuration like networking to boot partition
 * * bootloader -- copy/setup grub bootloader to EFI system partition
 * * reboot -- actually execute the reboot
 *
 * @param {string} imagePath - balenaOS flasher image to use as source
 * @param {string} windowsPartition - partition label of the device where we want to add the new data; defauls to "C"
 * @param {string} deviceName - storage device name, default: '\\.\PhysicalDrive0'
 * @param {string} efiLabel - label to use when mounting the EFI partition, in case the default "M" is already in use;
 *                            letter following efiLabel is used when mounting boot partition to write host config
 * @param {MigrateOptions} options - various options to qualify how migrate runs
 * @returns {MigrateResult} OK if no errors, FAIL on error
 */
export declare const migrate: (imagePath: string, windowsPartition?: string, deviceName?: string, efiLabel?: string, options?: MigrateOptions) => Promise<MigrateResult>;
