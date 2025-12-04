"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { ChevronRight } from "lucide-react";

type CaseCardProps = {
	title: string,
	year: string,
	subtitle: string,
	desc: string,
	tags: string[],
	image: StaticImageData,
	href: string,
	variant: boolean
}

export default function CaseCard({ title, year, subtitle, desc, tags, image, href, variant }: CaseCardProps) {
	return (
		<div className={`flex flex-col gap-4 md:flex-row ${variant ? "md:flex-row" : "md:flex-row-reverse"} w-full md:items-stretch md:justify-between`}>
			<div className="flex flex-1 flex-col justify-between gap-4 lg:gap-0">
				<div className="flex flex-col gap-2">
					<div className="flex flex-col gap-0.5">
						<p className="text-base">{year}</p>
						<h3 className="text-3xl font-medium">{title}</h3>
						<p className="text-lg">{subtitle}</p>
					</div>

					<p className="text-neutral-600 leading-relaxed">
						{desc}
					</p>
				</div>

				<div className="flex flex-col gap-4">
					<div className="flex flex-wrap gap-2">
						{tags.map(tag => (
							<span key={tag} className="px-4 py-2 text-sm border rounded-full border-foreground hover:border-transparent hover:bg-foreground hover:text-background cursor-pointer">
								{tag}
							</span>
						))}
					</div>

					{/*<Link href={href}>
						<motion.button
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300, damping: 20 }}
							className="px-4 py-2 bg-foreground text-background rounded-full flex flex-row items-center gap-1 hover:opacity-50 cursor-pointer"
						>
							Read More
							<motion.span
								whileHover={{ x: 4 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<ChevronRight />
							</motion.span>
						</motion.button>
					</Link>*/}
				</div>

			</div>

			<div className={`flex flex-1 items-center ${variant ? "md:justify-end" : "md:justify-start"}`}>
				<Image
					src={image}
					alt={title}
					width={500}
					height={500}
					className="rounded-sm shadow-sm"
				/>
			</div>
		</div>
	);
}
