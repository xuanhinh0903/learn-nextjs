import { Submit } from "@/app/components";

interface InformationProps {
  name: string;
  email: string;
  body: string;
  postId: number;
  id: number;
}

interface Props {
  data: InformationProps[];
}

export const ListInformation = ({ data }: Props) => {
  return (
    <>
      {data.map((item: InformationProps, index: number) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <p style={{ margin: "0", fontWeight: "bold" }}>Name: {item.name}</p>
            <p style={{ margin: "0" }}>Email: {item.email}</p>
          </div>
          <p style={{ margin: "0" }}>Description: {item.body}</p>
        </div>
      ))}
      <Submit />
    </>
  );
};
