import { NoteForm } from '@/features/notes/components/NoteForm'
import { NoteList } from '@/features/notes/components/NoteList'

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-xl space-y-6 p-6">
      <h1 className="text-2xl font-semibold">Notes</h1>
      <NoteForm />
      <NoteList />
    </div>
  )
}