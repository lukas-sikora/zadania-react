export function DownloadButton({ isDocumentAvailable }) {
  const documentUrl = '<https://example.com/document.pdf>'

  return (
    <button disabled={!isDocumentAvailable}>
      {isDocumentAvailable ? 'Pobierz dokument' : 'Dokument niedostępny'}
    </button>
  )
}
