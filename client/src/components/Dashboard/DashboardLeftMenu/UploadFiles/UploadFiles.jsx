import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const UploadFiles = () => {
	const [file, setFile] = useState(null);

	const fileTypes = ["JPG", "PDF"];
	const handleChange = (file) => {
		setFile(file);
	};

	return (
		<div
			style={{
				background: "#FFFFFF",
				boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				borderRadius: "11px",
				padding: "10px",
			}}
		>
			<FileUploader
				label="Upload or drop a file for your team"
				handleChange={handleChange}
				name="file"
				types={fileTypes}
			/>
		</div>
	);
};

export default UploadFiles;
