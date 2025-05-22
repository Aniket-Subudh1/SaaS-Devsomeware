import Container from "../global/container";
import Image from "next/image";

const Companies = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 companies overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-2xl lg:text-4xl font-medium">
                        Partners with <span className="font-subheading italic">Companies</span> 
                    </h4>
                </div>
            </Container>

            <Container delay={0.1}>
                <div className="flex flex-row flex-wrap items-center justify-center gap-8 max-w-xl mx-auto pt-16 text-muted-foreground transition-all">
                    <Image 
                        src="/logo.png"
                        alt="company logo"
                        className="h-[80px] w-auto hover:text-foreground"
                        width={100}
                        height={100}
                       />
                    <Image 
                        src="/gt.png"
                        alt="company logo"
                        className="h-[500px]w-auto hover:text-foreground"
                        width={200}
                        height={200}
                       />
                  
                </div>
            </Container>
        </div>
    )
};

export default Companies;
