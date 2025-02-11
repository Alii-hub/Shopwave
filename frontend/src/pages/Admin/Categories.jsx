import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react";

function Categories() {
    const [inputValues, setinputValues] = useState([]);

  //   const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinputValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputValues)
      // dispatch(login(inputValues))
      //   .unwrap()
      //   .then((response) => {
      //     if (response?.sucess == true) {
      //       toast.success(response?.message, { autoClose: 2000 });
      //       setTimeout(() => {
      //         navigate("/");
      //       }, 2000);
      //     } else {
      //       toast.error(response?.message, { autoClose: 2000 });
      //     }
      //   })
      //   .catch((error) => {
      //     toast.error(error, { autoClose: 2000 });      });
    };
  return (
   <>
   
   <Card>
          <CardHeader>
            <CardTitle>Add Category</CardTitle>
          </CardHeader>
          <CardContent>
            <form  onSubmit={handleSubmit}>
              <div className="flex ">
                <Input
                  className="me-2"
                  id="name"
                  type="text"
                  placeholder="Category Name"
                  required
                  name="name"
                  value={inputValues.name || ""}
                  onChange={handleChange}
                />
                <Button>Add Category</Button>
              </div>
            </form>
          </CardContent>
        </Card>

   </>
  )
}

export default Categories