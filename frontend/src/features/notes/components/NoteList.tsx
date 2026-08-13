'use client'

import { useEffect, useState } from 'react'
import { onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { getNotesCollection } from '@/lib/firebase/firestore'
import { useAuth } from '@/hooks/useAuth'
import type { Note } from '@/types/firestore'

export function NoteList() {
  const { user } = useAuth()
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    if (!user) return

    const q = query(
      getNotesCollection(),
      where('uid', '==', user.uid),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })

    return () => unsubscribe()   // stop listening when the component unmounts
  }, [user])

  if (notes.length === 0) {
    return <p className="text-sm text-gray-500">No notes yet — add one above.</p>
  }

  return (
    <ul className="space-y-2">
      {notes.map((note) => (
        <li key={note.id} className="rounded border p-3">
          <h3 className="font-medium">{note.title}</h3>
          {note.body && <p className="text-sm text-gray-600">{note.body}</p>}
        </li>
      ))}
    </ul>
  )
}