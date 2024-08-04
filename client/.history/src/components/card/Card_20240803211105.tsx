import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '../../lib/ui/card';

import React from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * USAGE:
 * @param {string} title - <Required> field
 * @param {string} description - <Optional> The description
 * @param {string} footerDescription - <Optional> The description
 * @param {string} className - Set style to the component Card
 * @param {string} classNameHeader - Set style  Header
 * @param {string} classNameTitle - Set style  Title
 * @param {string} classNameContent - Set style  Content
 * @param {string} classNameFooter - Set style  Footer
 * @param {string} classNameDescription - Set style  Description
 * @example
 * <Card
 *  className='text-center'
 *  classNameDescription='text-left'
 *  title="Testedsafad"
 *  description="Set the description here..."
 *  footerTitle="Set footer here..."
 *
 * >
 *  <Button className='mb-2 w-[150px] dark:bg-bgDark'> Deletar </Button>
 *  <Checkbox id="1" placeholder='Teste Box' label='Checkbox' className='dark:text-white mb-5'/>
 *  <Button className='mb-2 w-[150px]  dark:bg-bgDark'> Deletar </Button>
 *
 * </Card>
 */


type CardProps = React.ComponentProps<typeof Card> & {
    description?: string;
    title: string;
    footerTitle?: string;
    className?: string;
    classNameHeader?: string;
    classNameTitle?: string;
    classNameContent?: string;
    classNameFooter?: string;
    classNameDescription?: string;
};

export default function Cards({
    className,
    classNameHeader,
    classNameTitle,
    classNameContent,
    classNameFooter,
    classNameDescription,
    description,
    title,
    footerTitle,
    children,
}: React.PropsWithChildren<CardProps>) {

    return (
        <>
            <Card className={twMerge("inline-block h-fit m-1 p-1 bg-white dark:bg-bgDark", className)}>
                <CardHeader className={twMerge('w-full dark:bg-bgDark', classNameHeader)}>
                    <CardTitle className={twMerge('text-weg-1', classNameTitle)}> {title} </CardTitle>
                    {description &&
                        <CardDescription className={twMerge('h-fit max-w-sm  dark:bg-bgDark', classNameDescription)}>
                            <p className="font-normal break-words">{description}</p>
                        </CardDescription>
                    }
                </CardHeader>
                <CardContent className={twMerge("w-full flex flex-col", classNameContent)}>
                    {children}
                </CardContent>
                {footerTitle &&
                    <CardFooter className={twMerge('max-w-sm ', classNameFooter)}>
                        <p className="w-full font-normal break-words ">{footerTitle}</p>
                    </CardFooter>
                }
            </Card>
        </>
    );
};

