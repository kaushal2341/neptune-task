const InputField = ({
  inputName,
  onChangeHandler,
  labelName,
  inputClass,
  labelClass,
  placeHolder,
  isRequired,
  type,
  value
}: {
  inputName: string;
  onChangeHandler: Function;
  labelName: string;
  inputClass: string;
  labelClass: string;
  placeHolder: string;
  isRequired: boolean;
  type?: string;
  value?:string;
}) => (
  <>
    <div>
     <label className={labelClass}>{labelName}</label>
      <input
        type={type || "text"}
        name={inputName}
        value={value}
        className={inputClass}
        placeholder={placeHolder || ""}
        required={isRequired}
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  </>
);
export default InputField;
