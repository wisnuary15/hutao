import axios from "axios";
import fetch from 'node-fetch';

const handler = async (m, { text, command, conn }) => {
  const payloads = {
    prompt: `${text}`, // your imagination go here
    width: 512, // 512-1024
    height: 768, // 512-1024
    steps: 25, // max 50 steps
    model_id: "rev_animated", // default dream_shaper
    sampler: "DPMS++", // default DPMS
    seed: null, // pass null or remove to get random seed
    cfg: 7.5, // max 15<
    image_num: 1, // max 4
    negative_prompt: "ugly, ugly eyes, ugly face, deformed eyes, multi body, deformed body, disfigured, deformed, poorly drawn, extra limbs, close up, weird, blurry, watermark, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, picture frame, deformed hands, deformed eyes, multi body, deformed body, disfigured, bad art, deformed, poorly drawn, extra limbs, close up, weird, blurry, watermark, blurry, watermark, low res, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, picture frame, two heads, three heads, out of frame, disfigured, low-res, Deformed, blurry, bad anatomy, poorly drawn face, mutation, extra limb, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, disgusting, poorly drawn", // something you dont want to appear in the image
    safety_checker: "no", // set "yes" to replace nsfw image

    /* Another optional parameter */
    enhance_prompt: "yes", // if "yes" will add another prompt
    multi_lingual: "yes", // pass "yes" if you want to use other than the English language
    clip_skip: 2,
    panorama: "no", // pass "yes" if you want a panorama image
    lora_model: "makima_offset", // use loaded lora_model
    hiresFix: "no", // otherwise pass "no"
    lora_strength: 1, // default 1
    embeddings_model: "",
    webhook: null, // will send post about generating progress
  };
    conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})

  try {
    const { data } = await axios.request({
      baseURL: "https://api.itsrose.life",
      url: "/image/diffusion/txt2img",
      method: "POST",
      params: {
        apikey: `${global.rose}`,
      },
      data: payloads,
    }).catch((e) => e?.response)

    const { status, message, result } = data;

    if (!status) {
      // something wrong with your payloads
      m.reply(message); // see the message
    } else {
    const { images, metadata, generation_time } = result;
    let second = result.generation_time.toFixed()
    let model = metadata.model_id;
    let schedule = metadata.scheduler;
    let tip = result.tips
    let w = metadata.W;
    let h = metadata.H;
    let cfg = metadata.guidance_scale;
    let step = metadata.steps;
    let seed = metadata.seed;
    let streng = metadata.clip_skip
    
    
    let medata = `*Generating Time*: ${second} second
*prompt*: ${text}
*model_id*: ${model}
*scheduler*: ${schedule}
*W*: ${w}
*H*: ${h}
*guidance_scale*: ${cfg}
*steps*: ${step}
*seed*: ${seed}
*clip_skip*: ${streng}`;
    await m.reply(medata);
   
      for (const image of images) {
      await new Promise((resolve) => {
        setTimeout(async () => {
          await conn.sendMessage(m.chat, { image: { url: image } });
          resolve();
        }, generation_time * 1000);
      });
    }
    }
  } catch (error) {
    console.error(error);
    m.reply("An error occurred while processing the request.");
  }
};

handler.command = ['txt2img'];
handler.tags = ['ai','premium'];
handler.command = /^(txt2img)$/i;
handler.register = true;
handler.limit = true;
handler.premium = true

export default handler;