import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function SearchTable({ data = [] }) {
    const [tempData, setTempData] = useState(data)

    return (
        <table id="customers">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                {data.map(
                    ({ title, author, url }) => {
                        return (
                            <tr>
                                <th><a href={url}>{title}</a></th>
                                <th>{author}</th>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
    )
}