import { Typography, theme } from "antd";
import { Fade, Reveal } from "react-awesome-reveal";
import { FadeUp } from "../animations";
import "./Card.css";
import { DLL, RevealLabel } from "./Label";
import TagGroup from "./TagGroup";

function Card({ title, timestamp, subtitle, content, links }) {
    const { token } = theme.useToken();

    return (
        <Fade>
            <div className={`Card`}>
                <Typography.Paragraph>
                    <Reveal keyframes={FadeUp(20)} cascade damping={0.1}>
                        <Typography.Title level={3} style={{ color: token.colorPrimary }}>
                            {<DLL c={title} />}
                        </Typography.Title>
                        <Typography.Paragraph>
                            {timestamp ? (
                                <Typography.Text strong>
                                    <DLL c={timestamp} />
                                </Typography.Text>
                            ) : null}
                            {timestamp && subtitle ? <br /> : null}
                            {subtitle ? (
                                <Typography.Text style={{ color: token.colorPrimary }}>
                                    <DLL c={subtitle} />
                                </Typography.Text>
                            ) : null}
                        </Typography.Paragraph>
                        {content.map((p, i) =>
                            p.hidden ? (
                                <RevealLabel key={i}>
                                    <Typography.Paragraph>
                                        <DLL c={p.text} />
                                    </Typography.Paragraph>
                                </RevealLabel>
                            ) : (
                                <Typography.Paragraph key={i}>
                                    <DLL c={p.text} />
                                </Typography.Paragraph>
                            )
                        )}
                        {links && links.length > 0 ? <TagGroup tags={links} /> : null}
                    </Reveal>
                </Typography.Paragraph>
            </div>
        </Fade>
    );
}

export default Card;
