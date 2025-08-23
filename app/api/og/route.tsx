import { ImageResponse } from 'next/og'
export const runtime = 'edge'
export async function GET(req: Request){
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Cahit Oben'
  return new ImageResponse(
    (<div style={{ display:'flex', width:'100%', height:'100%', background:'#0b0b0c', color:'#fff', alignItems:'center', justifyContent:'center', padding:40 }}>
      <div style={{ fontSize: 64, fontWeight: 700 }}>{title}</div>
    </div>),
    { width: 1200, height: 630 }
  )
}
