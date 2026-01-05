import Script from "next/script"

interface SchemaMarkupProps {
  schema: any | any[]
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  const schemaArray = Array.isArray(schema) ? schema : [schema]

  return (
    <>
      {schemaArray.map((schemaItem, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaItem),
          }}
        />
      ))}
    </>
  )
}
