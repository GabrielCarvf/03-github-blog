import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDateDifference = (dateString: string) => {
  return formatDistanceToNowStrict(new Date(dateString), {
    addSuffix: true,
    locale: ptBR,
  })
}
