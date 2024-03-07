import ReactDOM from 'react-dom/client'
import { DownloadButton } from './components/DownloadButton'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DownloadButton isDocumentAvailable={true} />
)
