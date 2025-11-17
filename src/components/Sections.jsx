import { useState } from 'react'

export function AuthSection(){
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [userId, setUserId] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const login = async () => {
    const r = await fetch(`${baseUrl}/auth/phone`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({phone})})
    const d = await r.json()
    setUserId(d.user_id)
  }
  const createInvite = async () => {
    const r = await fetch(`${baseUrl}/invite/create?creator_user_id=${userId}`, {method:'POST'})
    const d = await r.json(); setCode(d.code)
  }
  const join = async () => {
    const r = await fetch(`${baseUrl}/invite/join`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({user_id:userId, code})})
    alert('Couple ID: ' + (await r.json()).couple_id)
  }

  return (
    <section id="auth" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-black text-rose-700">Join with your phone</h2>
          <p className="text-rose-800/80 mt-2">Use test phone numbers. No OTP in this demo.</p>
          <div className="mt-4 flex gap-2">
            <input className="flex-1 border border-rose-200 rounded px-3 py-2" placeholder="Phone e.g. +15551234567" value={phone} onChange={e=>setPhone(e.target.value)} />
            <button onClick={login} className="px-4 py-2 rounded bg-rose-600 text-white">Login</button>
          </div>
          {userId && (
            <div className="mt-4 space-y-3">
              <div className="text-sm text-rose-700">User ID: <span className="font-mono">{userId}</span></div>
              <div className="flex gap-2">
                <button onClick={createInvite} className="px-3 py-2 rounded bg-amber-500 text-white">Create Invite</button>
                <input className="flex-1 border border-rose-200 rounded px-3 py-2" placeholder="Invitation Code" value={code} onChange={e=>setCode(e.target.value)} />
                <button onClick={join} className="px-3 py-2 rounded bg-pink-600 text-white">Join</button>
              </div>
            </div>
          )}
        </div>
        <div className="rounded-xl border border-rose-200 p-6 bg-gradient-to-br from-rose-50 to-amber-50">
          <div className="text-6xl">🪔🌸🎆</div>
          <p className="mt-3 text-rose-800/70">Festival themed UI preview with petals, diya and fireworks icons.</p>
        </div>
      </div>
    </section>
  )
}

export function StylesShowcase(){
  const styles = [
    {key:'hindu', label:'Hindu', emoji:'🌺'},
    {key:'christian', label:'Christian', emoji:'⛪'},
    {key:'muslim', label:'Muslim', emoji:'🌙'},
    {key:'sikh', label:'Sikh', emoji:'🛡️'},
    {key:'south', label:'South Indian', emoji:'🥻'},
    {key:'western', label:'Western Rings', emoji:'💍'},
  ]
  return (
    <section id="styles" className="py-16 bg-gradient-to-b from-amber-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black text-rose-700 mb-6">Choose a style</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {styles.map(s=> (
            <div key={s.key} className="rounded-xl border border-rose-200 bg-white p-5 hover:shadow-lg transition">
              <div className="text-5xl">{s.emoji}</div>
              <div className="mt-3 font-semibold text-rose-700">{s.label}</div>
              <div className="text-sm text-rose-800/70">Decor, music and ritual animations adapt to style.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CeremonyDemo(){
  const [coupleId, setCoupleId] = useState('')
  const [progress, setProgress] = useState(0)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const init = async() => {
    const style = 'hindu'
    const cid = prompt('Enter Couple ID')
    if(!cid) return
    setCoupleId(cid)
    const r = await fetch(`${baseUrl}/ceremony/init`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({couple_id: cid, style})})
    if(!r.ok){ alert('Init failed'); return }
    step('start')
  }
  const step = async(action) => {
    if(!coupleId) return
    const r = await fetch(`${baseUrl}/ceremony/action`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({couple_id: coupleId, action})})
    const d = await r.json(); setProgress(d.progress)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black text-rose-700 mb-6">Ceremony (Demo)</h2>
        <div className="rounded-xl border border-rose-200 p-6 bg-gradient-to-br from-white to-rose-50">
          <div className="h-3 bg-rose-100 rounded"><div className="h-full bg-rose-600 rounded" style={{width: `${Math.round(progress*100)}%`}}/></div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={init} className="px-3 py-2 bg-rose-600 text-white rounded">Init</button>
            <button onClick={()=>step('jai_mala')} className="px-3 py-2 bg-amber-500 text-white rounded">Jai Mala</button>
            <button onClick={()=>step('phera')} className="px-3 py-2 bg-pink-600 text-white rounded">Phera</button>
            <button onClick={()=>step('sindoor')} className="px-3 py-2 bg-rose-700 text-white rounded">Sindoor</button>
            <button onClick={()=>step('complete')} className="px-3 py-2 bg-emerald-600 text-white rounded">Complete</button>
          </div>
        </div>
      </div>
    </section>
  )
}
