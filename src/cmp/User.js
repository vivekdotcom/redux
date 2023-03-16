import { useEffect , useRef} from "react";
import { 
  useDispatch,
  useSelector
 } from "react-redux";
 import {
  getAllUser,
  filter
 } from "../redux/Action/user.action";
 


const User =()=>{

  const dispatch = useDispatch();
  const response = useSelector(response=>response);

  useEffect(()=>{
     dispatch(getAllUser());
  },[dispatch]);

  const selectOption =useRef();

  const Tr=({item})=>{
    const TrDessign =(
       <>
       <tr>
        <td>{item.id}</td>
        <td>{item.email}</td>
        <td>{item.mobile}</td>
       </tr>
       </>
    )
    return TrDessign;
  }

  const design=(
     <>
      <div className="container py-5">
          <div className="row">
               <div className="col-md-2">
                   <select className="p-2 w-100" ref={selectOption}>
                    <option value="FILTER_BY_EMAIL">filter by email</option>
                    <option value="FILTER_BY_MOBILE">filter by mobile</option>
                   </select>
               </div>
               <div className="col-md-10">
                 <input className="p-2 w-100" 
                 placeholder="search..."
                 onChange={(e)=>dispatch(filter(selectOption, e))} />
               </div>
          </div>

          <table className="table table-bordered mt-4">
               <thead>
                <tr>
                  <th width="80">Sr_no</th>
                  <th>Email</th>
                  <th>Mobile</th>
                </tr>
               </thead>
               <tbody>
                {
                  response && response.data.map(item=><Tr key={item.id} item={item} />)
                }
               </tbody>
          </table>
      </div>
     </>
  )
  return design;
}
export default User;