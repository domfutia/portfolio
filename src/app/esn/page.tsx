import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, esn, person } from "@/resources";
import EsnContent from "@/components/EsnContent";

export async function generateMetadata() {
  return Meta.generate({
    title: esn.title,
    description: esn.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(esn.title)}`,
    path: esn.path,
  });
}

export default function Esn() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={esn.title}
        description={esn.description}
        path={esn.path}
        image={`/api/og/generate?title=${encodeURIComponent(esn.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${esn.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <EsnContent />
    </>
  );
}
