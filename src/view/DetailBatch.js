import React, { useEffect } from "react";
import { useParams } from "react-router";
import BatchDetail from "./BatchDetail";
import { Helmet } from "react-helmet";
const DetailBatch = () => {
    const citys = useParams();
    console.log(",,,,", citys)

    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <Helmet>
                <title>{citys.data + " in " + citys.date}|{citys.workid}</title>
                {/* <meta name="description" content={"Search here list of " + Detail[0].Batch[0].CourseTitel + " started for/in " + Detail[0].Batch[0].date + " with online " + Detail[0].Batch[0].batch_category + " training mode with Careerera expert training programs."} /> */}
                {/* <meta name="keywords" content={"" + Detail[0].Batch[0].CourseTitel + " " + Detail[0].Batch[0].date + ", " + Detail[0].Batch[0].CourseTitel + " in " + Detail[0].Batch[0].date + "," + Detail[0].Batch[0].CourseTitel + " for " + Detail[0].Batch[0].date + ", " + Detail[0].Batch[0].CourseTitel + " live for " + Detail[0].Batch[0].date + ", " + Detail[0].Batch[0].CourseTitel + " " + Detail[0].Batch[0].batch_category + " Classroom Training " + Detail[0].Batch[0].BatchDate + ""} /> */}
                <link rel="canonical" href={"https://www.careerera.com/" + citys.data + "/" + "liveoline" + "/" + citys.data + "/" + citys.workid} />
            </Helmet>
            <BatchDetail title={"in " + citys.citys} data={true} />
        </div>
    )
}

export default DetailBatch;