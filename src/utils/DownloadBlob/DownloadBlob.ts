import { DownloadBlobUtil } from './types'

const DownloadBlob: DownloadBlobUtil = (blob, fileName) => {
  const downloadLink = document.createElement('a')
  downloadLink.href = window.URL.createObjectURL(blob)
  downloadLink.download = fileName
  downloadLink.click()
}

export default DownloadBlob
