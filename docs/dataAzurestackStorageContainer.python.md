# `data_azurestack_storage_container`

Refer to the Terraform Registory for docs: [`data_azurestack_storage_container`](https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container).

# `dataAzurestackStorageContainer` Submodule <a name="`dataAzurestackStorageContainer` Submodule" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackStorageContainer <a name="DataAzurestackStorageContainer" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container azurestack_storage_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_container

dataAzurestackStorageContainer.DataAzurestackStorageContainer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  storage_account_name: str,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: DataAzurestackStorageContainerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#name DataAzurestackStorageContainer#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#storage_account_name DataAzurestackStorageContainer#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#id DataAzurestackStorageContainer#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#metadata DataAzurestackStorageContainer#metadata}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts">DataAzurestackStorageContainerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#name DataAzurestackStorageContainer#name}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.storageAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#storage_account_name DataAzurestackStorageContainer#storage_account_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#id DataAzurestackStorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#metadata DataAzurestackStorageContainer#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts">DataAzurestackStorageContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#timeouts DataAzurestackStorageContainer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#read DataAzurestackStorageContainer#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_container

dataAzurestackStorageContainer.DataAzurestackStorageContainer.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_container

dataAzurestackStorageContainer.DataAzurestackStorageContainer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_container

dataAzurestackStorageContainer.DataAzurestackStorageContainer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.containerAccessType">container_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.hasImmutabilityPolicy">has_immutability_policy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.hasLegalHold">has_legal_hold</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference">DataAzurestackStorageContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts">DataAzurestackStorageContainerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `container_access_type`<sup>Required</sup> <a name="container_access_type" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.containerAccessType"></a>

```python
container_access_type: str
```

- *Type:* str

---

##### `has_immutability_policy`<sup>Required</sup> <a name="has_immutability_policy" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.hasImmutabilityPolicy"></a>

```python
has_immutability_policy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `has_legal_hold`<sup>Required</sup> <a name="has_legal_hold" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.hasLegalHold"></a>

```python
has_legal_hold: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.timeouts"></a>

```python
timeouts: DataAzurestackStorageContainerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference">DataAzurestackStorageContainerTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurestackStorageContainerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts">DataAzurestackStorageContainerTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackStorageContainerConfig <a name="DataAzurestackStorageContainerConfig" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_container

dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  storage_account_name: str,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: DataAzurestackStorageContainerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#name DataAzurestackStorageContainer#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#storage_account_name DataAzurestackStorageContainer#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#id DataAzurestackStorageContainer#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#metadata DataAzurestackStorageContainer#metadata}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts">DataAzurestackStorageContainerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#name DataAzurestackStorageContainer#name}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#storage_account_name DataAzurestackStorageContainer#storage_account_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#id DataAzurestackStorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#metadata DataAzurestackStorageContainer#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerConfig.property.timeouts"></a>

```python
timeouts: DataAzurestackStorageContainerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts">DataAzurestackStorageContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#timeouts DataAzurestackStorageContainer#timeouts}

---

### DataAzurestackStorageContainerTimeouts <a name="DataAzurestackStorageContainerTimeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_container

dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#read DataAzurestackStorageContainer#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/storage_container#read DataAzurestackStorageContainer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackStorageContainerTimeoutsOutputReference <a name="DataAzurestackStorageContainerTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_container

dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts">DataAzurestackStorageContainerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurestackStorageContainerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackStorageContainer.DataAzurestackStorageContainerTimeouts">DataAzurestackStorageContainerTimeouts</a>, cdktf.IResolvable]

---



