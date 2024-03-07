export function DownloadButton({ isDocumentAvailable }) {
  const documentUrl = '<https://example.com/document.pdf>'

  return (
    <a
      href={isDocumentAvailable ? documentUrl : '#'}
      download={isDocumentAvailable}
      style={{ pointerEvents: isDocumentAvailable ? 'auto' : 'none' }}
    >
      <button disabled={!isDocumentAvailable}>
        {isDocumentAvailable ? 'Pobierz dokument' : 'Dokument niedostępny'}
      </button>
    </a>
  )
}
