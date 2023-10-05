import * as yup from 'yup';

const createValidationSchema = yup.object({
    title: yup
        .string()
        .required("Title is required"),
    description: yup
        .string()
        .required("Description is required")
        .min(1, "Description must be at least 1 characters")
        .max(200, "Description must be at most 200 characters"),
    category: yup
        .string()
        .required("Category is required"),
    price: yup
        .number()
        .required("Price is required"),
    rating: yup
        .number()
        .required("Rating is required"),
    image: yup
        .string()
        .required("Image is required"),
})

export default createValidationSchema


