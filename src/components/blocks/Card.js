import {Typography} from 'antd'
import "./Card.css"
import {Fade} from "react-awesome-reveal";
import {blue} from "@ant-design/colors";
import RevealLabel from "../labels/RevealLabel";
import DLL from "../labels/DynamicLanguageLabel";

function Card({title, timestamp, subtitle, content}) {
    return (
        <Fade>
            <div className={"Card"}>
                <Typography.Paragraph>
                    <Fade direction={"up"}>
                        <Typography.Title level={3} style={{color: blue.primary}}>
                            {<DLL c={title}/>}
                        </Typography.Title>
                        <Typography.Paragraph>
                            {
                                timestamp ? <Typography.Text strong><DLL c={timestamp}/></Typography.Text> : null
                            }
                            {
                                timestamp && subtitle ? <br/> : null
                            }
                            {
                                subtitle ? <Typography.Text italic style={{color: blue.primary}}><DLL c={subtitle}/></Typography.Text> : null
                            }
                        </Typography.Paragraph>
                        {
                            content.map(p => p.hidden ? <RevealLabel><Typography.Paragraph><DLL c={p.text}/></Typography.Paragraph></RevealLabel>
                                : <Typography.Paragraph><DLL c={p.text}/></Typography.Paragraph>)
                        }
                    </Fade>
                </Typography.Paragraph>
            </div>
        </Fade>

    )
}

export default Card