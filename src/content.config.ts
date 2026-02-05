import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

const docs = defineCollection({
	loader: docsLoader(),
	schema: docsSchema(),
});

const i18n = defineCollection({
	type: "data",
	schema: i18nSchema()
})

const goxeData = defineCollection({
	loader: file("src/data/goxeData.json"), schema: z.object({
		binary: z.string(),
		version: z.string(),
		description: z.string()
	})
})


export const collections = {
	docs: docs,
	i18n: i18n,
	goxeData: goxeData
};
