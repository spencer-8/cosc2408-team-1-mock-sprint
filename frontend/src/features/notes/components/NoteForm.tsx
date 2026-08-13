'use client'

import { useState, useTransition } from 'react'
import { createNote } from '../actions/notes.actions'

export function NoteForm({ onCreated }: { onCreated?: () => void }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    startTransition(async () => {
      const result = await createNote({ title, body })
      if (!result.success) {
        setError(result.error ?? 'Something went wrong')
        return
      }
      setTitle('')
      setBody('')
      onCreated?.()
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full rounded border px-3 py-2"
        disabled={isPending}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write something..."
        className="w-full rounded border px-3 py-2"
        rows={3}
        disabled={isPending}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={isPending || !title.trim()}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {isPending ? 'Saving…' : 'Add note'}
      </button>
    </form>
  )
}