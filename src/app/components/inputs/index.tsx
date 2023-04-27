const InputField = ({
  inputName,
  onChangeHandler,
  labelName,
  inputClass,
  labelClass,
  placeHolder,
  isRequired,
  type,
}: {
  inputName: string;
  onChangeHandler: Function;
  labelName: string;
  inputClass: string;
  labelClass: string;
  placeHolder: string;
  isRequired: boolean;
  type: string;
}) => (
  <>
    <div>
      {/* <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required> */}
      <label className={labelClass}>{labelName}</label>
      <input
        type={type || "text"}
        name={inputName}
        className={inputClass}
        placeholder={placeHolder || ""}
        required={isRequired}
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  </>
);
export default InputField;
