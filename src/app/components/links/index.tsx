const Link = ({
  subTitle,
  pathUrl,
  onClickHandler,
}: {
  subTitle: string;
  pathUrl?: string;
  onClickHandler?: Function;
}) => {
  const pathUrlObj = pathUrl ? { href: pathUrl } : {};
  const clickHandlerObj = onClickHandler?{onClick:()=>onClickHandler()}:{}
  return (
    <>
      <a
        {...pathUrlObj}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
       {...clickHandlerObj}
      >
        {subTitle}
      </a>
    </>
  );
};
export default Link;