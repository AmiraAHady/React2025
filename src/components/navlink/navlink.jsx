// function componet

const NavLink = ({content,url}) => {
    // console.log(url);
  return (
    <>
      <li style={{fontSize:"40px"}}>
        <a href={url} style={{textDecoration:"none",color:"pink"}}>{content}</a>
      </li>
    </>
  );
};
export default NavLink
