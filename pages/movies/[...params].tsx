import { useRouter } from "next/router";
import Seo from "../../components/Seo";

interface IParamsProps {
  params: { params: string[] };
}

export default function Detail({ params }: IParamsProps) {
  const router = useRouter();
  const { params: newParams } = params;
  console.log(newParams);
  const [title, id] = newParams || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params }: IParamsProps) {
  console.log(params);
  return {
    props: {
      params,
    },
  };
}
