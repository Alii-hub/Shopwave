import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { register } from "@/store/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

// select import from shadhadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategories } from "@/store/features/categories/categoriesSlice";

function AddProduct() {
  const [inputValues, setinputValues] = useState([]);

  const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinputValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
      dispatch(getAllCategories());
    }, [dispatch]);

    if (status == "loading") {
        return (
          <div className="flex justify-center items-center h-full">
            <p>Loading Categories ...</p>
          </div>
        );
      }
      if (error == "error") {
        return (
          <div className="flex justify-center items-center h-full">
            <p>Error while fetching Categories ...</p>
          </div>
        );
      }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Products Detailes</CardTitle>
          <CardDescription>
            Enter your information to add a product
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Full Name</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter product title"
                  required
                  name="title"
                  value={inputValues.title || ""}
                  onChange={handleChange}
                />
              </div>
              {/* ------ */}
              <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Enter product price"
                    required
                    name="price"
                    value={inputValues.price || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* -------- */}

              <Button
                type="submit"
                className="w-full"
                disabled={status == "loading" ? true : false}
              >
                {status == "loading"
                  ? "Adding product...."
                  : "Add Product"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default AddProduct;
