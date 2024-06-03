import React from "react"

type Props = {
  title: string
  subtitle: string
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl md:text-4xl font-light">{title}</h1>
      <h3 className="font-light text-lg">{subtitle}</h3>
    </div>
  )
}

export default SectionTitle
