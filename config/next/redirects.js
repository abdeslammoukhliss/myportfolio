const redirect = (source, destination, permanent = true) => {
  return { source, destination, permanent }
}

module.exports = [
  redirect('/feed', '/feed.xml'),
  redirect('/resume/download', '/share/resume.pdf'),
  redirect('/resume/download-cover', '/share/coverLetter.pdf'),
  redirect('/resume/download-essays', '/share/essay.pdf'),
]
