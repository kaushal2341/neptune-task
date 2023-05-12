import BarsIcon from "@/app/custom-icons/bars-icons";
import { HeaderTypes, KeyValueTypes } from "@/app/types/TableTypes";
import { truncateWord } from "@/app/utils/string.utils";

const Table = ({ headers,data }: { headers: Array<HeaderTypes>; data: Array<KeyValueTypes> }) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="text-left border-collapse border-b w-full">
          {headers.map((header,index) => (
            <th key={header.name+index} scope={header.scope} className={header.class}>
              {header.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length?data.map((datum,index)=><tr key={datum.key+index} className=" border-collapse border-b text-gray-200">
          <td className={headers[0].tableBodyRowClass}>{datum.key}</td>
          <td className={headers[1].class}><div className="flex justify-end items-center text-gray-600">{datum.key==='Balance'? <BarsIcon/>:null}<p className={headers[1].tableBodyRowClass}> {truncateWord(datum.value.toString(),10)}</p></div></td>
        </tr>):null}
       
      </tbody>
    </table>
  );
};
export default Table;
