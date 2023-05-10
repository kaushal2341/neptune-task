import { HeaderTypes, KeyValueTypes } from "@/app/types/TableTypes";

const Table = ({ headers,data }: { headers: Array<HeaderTypes>; data: Array<KeyValueTypes> }) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="text-left border-collapse border-b w-full">
          {headers.map((header) => (
            <th scope={header.scope} className={header.class}>
              {header.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length?data.map((datum)=><tr className=" border-collapse border-b text-gray-200">
          <td className={headers[0].tableBodyRowClass}>{datum.key}</td>
          <td className={headers[1].class}><p className={headers[1].tableBodyRowClass}>{datum.value}</p></td>
        </tr>):null}
       
      </tbody>
    </table>
  );
};
export default Table;
