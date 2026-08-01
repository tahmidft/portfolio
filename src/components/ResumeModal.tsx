import { useEffect } from 'react'

interface ResumeModalProps {
  open: boolean
  onClose: () => void
}

const RESUME_PDF = '/resume.pdf'
const RESUME_DOCX = '/Farhan-Tahmid-Resume.docx'

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div
      className={`resume-overlay${open ? ' open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div className="resume-modal">
        <div className="resume-modal-header">
          <span>Resume — Farhan Tahmid</span>
          <div className="resume-modal-actions">
            <a className="resume-download" href={RESUME_DOCX} download="Farhan-Tahmid-Resume.docx">
              Download DOCX
            </a>
            <a className="resume-download" href={RESUME_PDF} download="Farhan-Tahmid-Resume.pdf">
              Download PDF
            </a>
            <button type="button" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
        </div>
        <div className="resume-modal-body">
          <iframe src={RESUME_PDF} title="Farhan Tahmid Resume" />
        </div>
      </div>
    </div>
  )
}
