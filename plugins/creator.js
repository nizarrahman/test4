let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  conn.sendContact(m.chat, '6281386945391', 'Nizar', m)
  conn.sendContact(m.chat, '6283120240903', 'Adryan', m)
  conn.sendContact(m.chat, '6281223618476', 'Irham', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
