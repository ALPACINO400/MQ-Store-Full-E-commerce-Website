const UploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "m7h4edxs");
  formData.append("folder", "full-stack-project");
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/difr1j7qs/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to upload image");
    }
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.log("Error uploading image to cloudinary:", error);
    throw error;
  }
};

export default UploadImage;
