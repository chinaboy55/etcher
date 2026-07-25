/**
 * @summary Clean a device's partition tables
 * Functional only on Windows platform; otherwise does nothing.
 * @param {String} device - device path
 * @example
 * diskpart.clean('\\\\.\\PhysicalDrive2')
 *   .then(...)
 *   .catch(...)
 */
export declare const clean: (device: string) => Promise<void>;
/**
 * @summary Reduces the size of the given partition
 * @param {String} partition - the identifier of the partition
 * @param {number} desiredMB - (optional) megabytes to free up, checked against querymax, defaults to max available
 * @example
 * shrinkPartition('C', 2048)
 *  .then(...)
 *  .catch(...)
 */
export declare const shrinkPartition: (partition: string, desiredMB?: number) => Promise<void>;
/**
 *
 * @param {string} device - device path
 * @param {number} sizeMB - size of the new partition (free space has to be present)
 * @param {string} fs - default "fat32", possible "ntfs" the filesystem to format with
 * @param {string} desiredLetter - letter to assign to the new volume, gets the next free letter by default
 * @example
 * createPartition('\\\\.\\PhysicalDrive2', 2048)
 *  .then(...)
 *  .catch(...)
 */
export declare const createPartition: (device: string, sizeMB: number, fsType?: 'exFAT' | 'fat32' | 'ntfs', label?: string, desiredLetter?: string) => Promise<void>;
/**
 * @summary Sets the online status of a partition (volume)
 * @param {String} volume - the identifier of the volume
 * @example
 * setPartitionOnlineStatus('3', false)
 *  .then(...)
 *  .catch(...)
 */
export declare const setPartitionOnlineStatus: (volume: string, status: boolean) => Promise<void>;
/**
 * @summary Sets the Windows drive letter for a volume.
 * @param {String} volume - the identifier of the volume
 * @param {String} letter - the drive letter, like 'N'
 */
export declare const setDriveLetter: (volume: string, letter: string) => Promise<void>;
/**
 * @summary Clears the Windows drive letter from a volume.
 * @param {String} volume - the identifier of the volume
 * @param {String} letter - the drive letter, like 'N'
 */
export declare const clearDriveLetter: (volume: string, letter: string) => Promise<void>;
/**
 * Find the volume with the provided label.
 *
 * @param {string} device - device path
 * @param {string} label - volume/partition label
 * @return {number} identifier for the first matching volume, or '' if not found
 * @example
 * findVolume('\\\\.\\PhysicalDrive0', 'flash-boot')
 *  .then(...)
 *  .catch(...)
 */
export declare const findVolume: (device: string, label: string) => Promise<string>;
/**
 * Provide unallocated space on disk, in KB
 *
 * @param {string} device - device path
 * @example
 * getUnallocatedSize('\\\\.\\PhysicalDrive0')
 *  .then(...)
 *  .catch(...)
 */
export declare const getUnallocatedSize: (device: string) => Promise<number>;
