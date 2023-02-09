import Letter from './Letter'

type Props = {
  letters: string
  className: string
  startIdx?: number
}

const LettersZone = ({ className, letters, startIdx = 0 }: Props) => (
  <span className={className} data-cy={letters}>
    {letters.split('').map((char, i) => {
      const index = startIdx + i
      const key = `letter_${char}_${index}`
      if (char === ' ') {
        return <span key={key}>&nbsp;</span>
      }
      return <Letter key={key} index={index} text={char} />
    })}
  </span>
)

export default LettersZone
