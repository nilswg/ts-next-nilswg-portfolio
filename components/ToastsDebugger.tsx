import type { ToastType } from '@/stores/toasts'
import { useToastsStore } from '@/stores/toasts'
import { useState } from 'react'

const ToastsDebugger = () => {
  const [type, setType] = useState<ToastType>('success')
  const [text, setText] = useState('Toast Alert!')
  const addToast = useToastsStore((state) => state.addToast)
  const onClick = () => addToast({ type, text })
  return (
    <div className="fixed top-20 left-3 z-20 w-[20rem]">
      <div className="mb-4 flex flex-col px-3 text-white">
        <div className="flex flex-row items-start">
          <label className="inline-block w-10">type </label>
          <select
            className="rounded-sm border border-white bg-transparent bg-black"
            value={type}
            onChange={(e: any) => setType(e.target.value)}
          >
            <option value="success">Success</option>
            <option value="warn">Warn</option>
            <option value="info">Info</option>
            <option value="error">Error</option>
          </select>
        </div>
        <div className="flex flex-row items-start">
          <label className="inline-block w-10">text </label>
          <textarea
            className="rounded-sm border border-white bg-transparent"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />
        </div>
        <button className="w-full border border-white py-1" onClick={onClick}>
          add Toast
        </button>
      </div>
    </div>
  )
}

export default ToastsDebugger
