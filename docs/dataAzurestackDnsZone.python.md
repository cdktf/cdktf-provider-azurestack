# `data_azurestack_dns_zone`

Refer to the Terraform Registory for docs: [`data_azurestack_dns_zone`](https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone).

# `dataAzurestackDnsZone` Submodule <a name="`dataAzurestackDnsZone` Submodule" id="@cdktf/provider-azurestack.dataAzurestackDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackDnsZone <a name="DataAzurestackDnsZone" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone azurestack_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_dns_zone

dataAzurestackDnsZone.DataAzurestackDnsZone(
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
  id: str = None,
  resource_group_name: str = None,
  timeouts: DataAzurestackDnsZoneTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#name DataAzurestackDnsZone#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#id DataAzurestackDnsZone#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#resource_group_name DataAzurestackDnsZone#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts">DataAzurestackDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#name DataAzurestackDnsZone#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#id DataAzurestackDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#resource_group_name DataAzurestackDnsZone#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts">DataAzurestackDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#timeouts DataAzurestackDnsZone#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.resetResourceGroupName">reset_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#read DataAzurestackDnsZone#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_group_name` <a name="reset_resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.resetResourceGroupName"></a>

```python
def reset_resource_group_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_dns_zone

dataAzurestackDnsZone.DataAzurestackDnsZone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_dns_zone

dataAzurestackDnsZone.DataAzurestackDnsZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_dns_zone

dataAzurestackDnsZone.DataAzurestackDnsZone.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.maxNumberOfRecordSets">max_number_of_record_sets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.nameServers">name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.numberOfRecordSets">number_of_record_sets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference">DataAzurestackDnsZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts">DataAzurestackDnsZoneTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `max_number_of_record_sets`<sup>Required</sup> <a name="max_number_of_record_sets" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.maxNumberOfRecordSets"></a>

```python
max_number_of_record_sets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_servers`<sup>Required</sup> <a name="name_servers" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.nameServers"></a>

```python
name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `number_of_record_sets`<sup>Required</sup> <a name="number_of_record_sets" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.numberOfRecordSets"></a>

```python
number_of_record_sets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.timeouts"></a>

```python
timeouts: DataAzurestackDnsZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference">DataAzurestackDnsZoneTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurestackDnsZoneTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts">DataAzurestackDnsZoneTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackDnsZoneConfig <a name="DataAzurestackDnsZoneConfig" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_dns_zone

dataAzurestackDnsZone.DataAzurestackDnsZoneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  resource_group_name: str = None,
  timeouts: DataAzurestackDnsZoneTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#name DataAzurestackDnsZone#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#id DataAzurestackDnsZone#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#resource_group_name DataAzurestackDnsZone#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts">DataAzurestackDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#name DataAzurestackDnsZone#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#id DataAzurestackDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#resource_group_name DataAzurestackDnsZone#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneConfig.property.timeouts"></a>

```python
timeouts: DataAzurestackDnsZoneTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts">DataAzurestackDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#timeouts DataAzurestackDnsZone#timeouts}

---

### DataAzurestackDnsZoneTimeouts <a name="DataAzurestackDnsZoneTimeouts" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_dns_zone

dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#read DataAzurestackDnsZone#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/dns_zone#read DataAzurestackDnsZone#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackDnsZoneTimeoutsOutputReference <a name="DataAzurestackDnsZoneTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_dns_zone

dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts">DataAzurestackDnsZoneTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurestackDnsZoneTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackDnsZone.DataAzurestackDnsZoneTimeouts">DataAzurestackDnsZoneTimeouts</a>, cdktf.IResolvable]

---



