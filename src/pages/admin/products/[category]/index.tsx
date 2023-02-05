import React from 'react';
import {useRouter} from "next/router";
import AdminLayoutComponent from "@/AdminLayout/adminLayout.component";

const Index = () => {
    const { query } = useRouter()
    return (
        <AdminLayoutComponent>
            <div>
                {query.category}
            </div>
        </AdminLayoutComponent>
    );
};

export default Index;