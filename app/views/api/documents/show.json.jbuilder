json.key_format! camelize: :lower

json.document do
    json.set! @document.id do
      json.partial! "api/documents/document", document: @document
    end
end
json.users do
  @editors.each do |editor|
    json.set! editor.id do
      json.partial! 'api/users/user', user: editor
    end
  end
end