import { GetPartitionsResult, GPTPartition, MBRPartition } from 'partitioninfo';
import { BlockDevice, SourceDestination, File } from '../source-destination';
export declare const MS_DATA_PARTITION_ID = "EBD0A0A2-B9E5-4433-87C0-68B6B72699C7";
/**
 * Finds partitions in newTable with a partition offset not found in oldTable.
 * Expects paritioninfo partition objects.
 * @returns Array of new partitions
 */
export declare const findNewPartitions: (oldTable?: GetPartitionsResult, newTable?: GetPartitionsResult) => (MBRPartition | GPTPartition)[];
/**
 * Scans the filesystem on the partitions for the provided device for the filesystem
 * label text, assuming the filesystem is the provided type.
 *
 * Partition type must be GPT.
 *
 * @returns partition containing the label, or null if not found
 */
export declare const findFilesystemLabel: (table: GetPartitionsResult, device: BlockDevice, label: string, fs: 'fat16' | 'ext4') => Promise<GPTPartition | MBRPartition | null>;
/**
 * Provides the boundary offsets for a partition on a device
 * @param {SourceDestination} source - Device containing requested partition
 * @param {number} partitionIndex - 1-based index of requested partition
 * @returns {start, end} object with offsets
 */
export declare const getPartitionBoundaries: (source: SourceDestination, partitionIndex?: number) => Promise<{
    start: number;
    end: number | undefined;
}>;
/**
 * Calculate the size required for a partition to contain the contents of
 * the provided source partition. On Windows, rounds up to nearest MB due to
 * limitations of partitioning tools.
 *
 * @param {SourceDestination} source - Device containing requested partition
 * @param {number} partitionIndex - 1-based index of requested partition
 * @returns calculated size in bytes
 */
export declare const calcRequiredPartitionSize: (source: SourceDestination, partitionIndex?: number) => Promise<number>;
/**
 * Copy a partition, referenced by index, from an image file to a block device,
 * @param {File} source - source image for partition
 * @param {number} sourcePartitionIndex
 * @param {BlockDevice} target - Target device for partition
 * @param {number} targetOffset - For partition on device
 * @returns Promise<>
 */
export declare const copyPartitionFromImageToDevice: (source: File, sourcePartitionIndex: number, target: BlockDevice, targetOffset: number) => Promise<unknown>;
/**
 * Creates a block device for the drive on this machine device named with the requested label.
 * @returns created device
 */
export declare const getTargetBlockDevice: (mountLabel?: string) => Promise<BlockDevice>;
/**
 * Identifies the type of WiFi authentication for a connection profile.
 * NONE means no authentication.
 */
export declare const enum WifiAuthType {
    NONE = 0,
    WPA2_PSK = 1,
    WPA3_SAE = 2
}
/** Configuration values for a single WiFi network profile. */
export interface ConnectionProfile {
    name: string;
    wifiSsid: string;
    wifiAuthType: WifiAuthType;
    wifiKey: string;
}
/**
 * Writes a NetworkManager configuration file for the provided network connection
 * profile. Assumes profile is for WiFi configuration.
 *
 * @param {string} pathname - name for file
 * @param {ConnectionProfile} profile - Profile data to write; must define WiFi SSID
 * @returns Promise<void> on file write
 */
export declare const writeNetworkConfig: (pathname: string, profile: ConnectionProfile) => Promise<void>;
