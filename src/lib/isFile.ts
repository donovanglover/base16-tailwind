import { lstat } from 'node:fs/promises'

export const isFile = async (fileName: string): Promise<boolean> => {
  return (await lstat(fileName)).isFile()
}
