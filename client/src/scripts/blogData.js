const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, '../../public/assets/blogs');

const getBlogData = () => {
        const blogFolders = fs.readdirSync(blogsDir);
        const blogData = blogFolders
                .map((folder) => {
                        const folderPath = path.join(blogsDir, folder);
                        const descPath = path.join(folderPath, 'desc.json');

                        if (fs.existsSync(descPath)) {
                                const desc = JSON.parse(
                                        fs.readFileSync(descPath, 'utf-8'),
                                );

                                // Get all files in the folder
                                const files = fs.readdirSync(folderPath);

                                // Filter for .txt and .pdf files and get the first match for each
                                const txtFile = files.find((file) =>
                                        file.endsWith('.txt'),
                                );
                                const pdfFile = files.find((file) =>
                                        file.endsWith('.pdf'),
                                );

                                if (txtFile && pdfFile) {
                                        return {
                                                id: folder,
                                                title: desc.title,
                                                author: desc.author,
                                                date: desc.date,
                                                tags: desc.tags,
                                                description: desc.desc,
                                                txtUrl: `/assets/blogs/${folder}/${txtFile}`, // Use the actual .txt filename
                                                pdfUrl: `/assets/blogs/${folder}/${pdfFile}`, // Use the actual .pdf filename
                                        };
                                }
                        }
                        return null;
                })
                .filter((blog) => blog !== null)
                .sort((a, b) => parseInt(b.id) - parseInt(a.id)); // Sort by blog ID (newest to oldest)

        // Write the sorted blog data to a JSON file
        fs.writeFileSync(
                path.join(__dirname, '../../src/assets/blogsData.json'),
                JSON.stringify(blogData, null, 2),
        );
};

// Execute the function to generate the blog data
getBlogData();
