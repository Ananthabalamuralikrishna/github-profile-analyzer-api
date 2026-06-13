import { fetchgituser } from "../services/gitService.js";
import { connectDB } from "../dbConfig.js";

export const anaprofile = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await fetchgituser(username);

        const db = await connectDB();

        db.query(
            `INSERT INTO github_profile
            (user_name,name,followers,following,reposistory,gists,acc_created,profile_url)
            VALUES(?,?,?,?,?,?,?,?)`,
            [
                user.login,
                user.name,
                user.followers,
                user.following,
                user.public_repos,
                user.public_gists,
                user.created_at.split("T")[0],
                user.html_url
            ],
            (err, result) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: err.message
                    });
                }

                res.status(201).json({
                    success: true,
                    message: "Profile saved successfully",
                    data: {
                        username: user.login,
                        followers: user.followers,
                        following: user.following,
                        repository: user.public_repos,
                        gists: user.public_gists
                    }
                });
            }
        );

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};