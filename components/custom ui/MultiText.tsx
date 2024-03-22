'use client'

import { useState } from 'react'

import { X } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Input } from '../ui/input'

interface MultiTextProps {
  placeholder: string
  value: string[]
  onChange: (value: string) => void
  onRemove: (value: string) => void
}

const MultiText: React.FC<MultiTextProps> = ({ placeholder, value, onChange, onRemove }) => {
  const [inputValue, setInputValue] = useState('')

  const addValue = (item: string) => {
    onChange(item)
    setInputValue('')
  }

  return (
    <>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            addValue(inputValue)
          }
        }}
      />

      <div className="flex gap-1 flex-wrap mt-4">
        {value.map((item, index) => (
          <Badge key={index} className="bg-grey-1 text-white">
            {item}
            <div
              className="ml-1 rounded-full hover:bg-red-1 cursor-pointer"
              onClick={() => onRemove(item)}
            >
              <X className="h-3 w-3" />
            </div>
          </Badge>
        ))}
      </div>
    </>
  )
}

export default MultiText
