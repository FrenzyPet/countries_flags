import { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.article``

const CardImage = styled.img``

const CardBody = styled.div``

const CardTitle = styled.h3``

const CardList = styled.ul``

const CardListItem = styled.li``

interface IInfo {
  title: string
  description: string | number
}

interface ICardProps {
  img: string
  name: string
  info: IInfo[]
  onClick: () => void
}

const Card: FC<ICardProps> = ({ img, name, info, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(item => (
            <CardListItem key={item.title}>
              <b>{item.title}:</b> {item.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  )
}

export default Card
